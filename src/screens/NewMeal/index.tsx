import { useState } from "react";
import { View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import * as yup from "yup";
import moment from "moment";
import { useFormik } from "formik";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { RadioButton } from "@components/RadioButton";

import { mealCreate } from "@storage/meal/mealCreate";

import { Body, ButtonContainer, Container, InputRow, RadiosTitle } from "./styles";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";

export function NewMeal() {
    const [inDiet, setInDiet] = useState<string>();

    const navigation = useNavigation();

    const ValidationSchema = yup.object().shape({
        name: yup
            .string()
            .required('Preencha o nome da refeição')
            .min(2, ({ min }) => `O nome da refeição deve ter, no mínimo, ${min} caracteres`)
            .max(25, ({ max }) => `O nome da refeição deve ter, no máximo, ${max} caracteres`),
        description: yup
            .string()
            .required('Preencha a descrição da refeição')
            .min(5, ({ min }) => `A descrição da refeição deve ter, no mínimo, ${min} caracteres`)
            .max(100, ({ max }) => `A descrição da refeição deve ter, no máximo, ${max} caracteres`),
        date: yup
            .string()
            .test(
                'Data inválida',
                'A data digitada não é válida',
                (value) => moment(value, "DD/MM/YYYY", true).isValid()

            )
            .test(
                'Data máxima',
                'A data não pode ser maior que hoje',
                (value) => moment(value, "DD/MM/YYYY").format("YYYYMMDD") <= moment().format("YYYYMMDD"),
            ),
        time: yup
            .string()
            .test(
                'Hora inválida',
                'A hora digitada não é válida',
                (value) => moment(value, "HH:mm", true).isValid()
            )
    });

    const { handleChange, values, handleSubmit, handleBlur, isValid, errors, touched } = useFormik({
        validationSchema: ValidationSchema,
        initialValues: {
            name: '',
            description: '',
            date: '',
            time: '',
            inDiet: false
        },
        onSubmit: values => { handleFormSubmit(values) }
    });

    async function handleFormSubmit(values: MealStorageDTO) {
        if (inDiet === null) {
            Alert.alert('Nova Refeição', 'Para cadastrar, informe se a refeição está dentro da dieta.')
            return;
        }

        const newMeal = {
            name: values.name.trim(),
            description: values.description.trim(),
            date: values.date,
            time: values.time,
            inDiet: inDiet === 'yes' ? true : false,
        }

        try {
            await mealCreate(newMeal);

            setInDiet(undefined);

            navigation.navigate('home');
        } catch (error) {
            Alert.alert('Nova refeição', 'Não foi possível adicionar a refeição.');
        }
    }

    function handleIsDiet(button: string) {
        setInDiet(button)
    }

    return (
        <Container>
            <Header />

            <Body>

                <Input
                    label="Nome"
                    numberOfLines={1}
                    value={values.name}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    error={errors.name}
                    touched={touched.name}
                />

                <Input
                    label="Descrição"
                    numberOfLines={5}
                    value={values.description}
                    onChangeText={handleChange('description')}
                    onBlur={handleBlur('description')}
                    error={errors.description}
                    touched={touched.description}
                />

                <InputRow>
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <Input
                            label="Data"
                            numberOfLines={1}
                            value={values.date}
                            onChangeText={handleChange("date")}
                            onBlur={handleBlur('date')}
                            error={errors.date}
                            touched={touched.date}
                        />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Input
                            label="Hora"
                            numberOfLines={1}
                            value={values.time}
                            onChangeText={handleChange("time")}
                            onBlur={handleBlur('time')}
                            error={errors.time}
                            touched={touched.time}
                        />
                    </View>
                </InputRow>

                <RadiosTitle>Está dentro da dieta?</RadiosTitle>
                <InputRow>
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <RadioButton
                            title="Sim"
                            isActive={inDiet === 'yes'}
                            onPress={() => handleIsDiet('yes')}
                        />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <RadioButton
                            type="SECONDARY"
                            title="Não"
                            isActive={inDiet === 'no'}
                            onPress={() => handleIsDiet('no')}
                        />
                    </View>
                </InputRow>

                <ButtonContainer>
                    <Button title="Cadastrar refeição" onPress={() => handleSubmit()} />
                </ButtonContainer>

            </Body>
        </Container>
    )
}