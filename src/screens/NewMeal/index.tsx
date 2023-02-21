import { View } from "react-native";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { RadioButton } from "@components/RadioButton";

import { Body, ButtonContainer, Container, InputRow, RadiosTitle } from "./styles";
import { useState } from "react";

export function NewMeal() {
    const [isDiet, setIsDiet] = useState<string>();

    function handleIsDiet(button: string) {
        setIsDiet(button)
    }

    return (
        <Container>
            <Header />

            <Body>

                <Input
                    label="Nome"
                    numberOfLines={1}
                />

                <Input
                    label="Descrição"
                    numberOfLines={7}
                />

                <InputRow>
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <Input
                            label="Data"
                            numberOfLines={1}
                        />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Input
                            label="Hora"
                            numberOfLines={1}
                        />
                    </View>
                </InputRow>

                <RadiosTitle>Está dentro da dieta?</RadiosTitle>
                <InputRow>
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <RadioButton
                            title="Sim"
                            isActive={isDiet === 'yes'}
                            onPress={() => handleIsDiet('yes')}
                        />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <RadioButton
                            type="SECONDARY"
                            title="Não"
                            isActive={isDiet === 'no'}
                            onPress={() => handleIsDiet('no')}
                        />
                    </View>
                </InputRow>

                <ButtonContainer>
                    <Button title="Cadastrar refeição" />
                </ButtonContainer>

            </Body>
        </Container>
    )
}