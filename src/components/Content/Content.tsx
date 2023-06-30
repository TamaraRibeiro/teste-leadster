import Button from "../Button/Button";
import { Section, DivOne } from "./content.styled";

export default function Content() {
  return (
    <Section>
      <DivOne>
        <div>
          <Button text="Agências" />
          <Button text="Chatbot" />
          <Button text="Marketing Digital" />
          <Button text="Geração de Leads" />
          <Button text="Mídia Paga" />
        </div>

        <div>
          <select>

            <option value='date'>
              Data de publicação
            </option>
          </select >
        </div>
      </DivOne>
    </Section>
  );
}
