import { DivCopyrightContent, Leadster, Text } from "./copyright";

export default function Copyright() {
  return (
      <DivCopyrightContent>
        <Text>
          Copyright © 2015 - 2022 Todos os direitos reservados |
          <Leadster href="">Leadster</Leadster>
        </Text>
        <Text>
          Rua Jose Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
          Termos de uso
        </Text>
      </DivCopyrightContent>
  );
}
