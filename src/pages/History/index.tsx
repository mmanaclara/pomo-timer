/* eslint-disable prettier/prettier */
import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Estudar TypeScript</td>
              <td>20 minutos</td>
              <td>Há 1 mês</td>
              <td><Status statusColor="green">Concluído</Status></td>
            </tr>
            <tr>
              <td>Estudar ReactJS</td>
              <td>30 minutos</td>
              <td>Há 2 meses</td>
              <td><Status statusColor="yellow">Em andamento</Status></td>
            </tr>
            <tr>
              <td>Estudar JavaScript</td>
              <td>25 minutos</td>
              <td>Há 3 meses</td>
              <td><Status statusColor="red">Interrompido</Status></td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}