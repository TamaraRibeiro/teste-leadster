import Button from "./Button/Button";
import { Section, DivOne, DivButton, DivDate, Select } from "./content";
import PageNumbers from "../PageNumbers/PageNumbers";
import CardsContent from "../CardsContent/CardsContent";

export default function Content() {
  return (
  <Section>
      {/* Div Buttons and Order */}
      <DivOne>
        <DivButton>
          <Button text="Agências" />
          <Button text="Chatbot" />
          <Button text="Marketing Digital" />
          <Button text="Geração de Leads" />
          <Button text="Mídia Paga" />
        </DivButton>

        <DivDate>
          <p>Ordenar por</p>
          <Select>
            <option value="date">Data de Publicação</option>
          </Select>
        </DivDate>
      </DivOne>

      {/* Div Content Cards */}
      <CardsContent />

      {/* Div Pages */}
     <PageNumbers />
    </Section> 
    
  );
}
