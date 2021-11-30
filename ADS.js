class Ads extends React.Component {
   constructor() {
      super();
      this.state = {
      disciplina1: 'Sistemas Operacionais',
      disciplina2: 'Inglês', 
      disciplina3: 'Laboratório de Estruturas de Dados e Programação', disciplina4: 'Introdução a Banco de Dados',
      carga1: 66.7,
      carga2: 33.3,
      carga3: 33.3,
      carga4: 66.7,
      periodo: 'Noturno'};
   }

      render() {
        return <div>
          <h2 id='title'> Componentes curriculares </h2>
          <table>
            <tr>               
              <th>DISCIPLINA</th>
              <th>CARGA</th>
              <th>PERIODO</th>
            </tr>
              <tr>
              <td>{this.state.disciplina1}</td>
              <td>{this.state.carga1}</td>
              <td>{this.state.periodo}</td>
              </tr>
            <tr>
              <td>{this.state.disciplina2}</td>
              <td>{this.state.carga2}</td>
              <td>{this.state.periodo}</td>
              </tr>
            <tr>
              <td>{this.state.disciplina3}</td>
              <td>{this.state.carga3}</td>
              <td>{this.state.periodo}</td>
              </tr>
            <tr>
              <td>{this.state.disciplina4}</td>
              <td>{this.state.carga4}</td>
              <td>{this.state.periodo}</td>
              </tr>
  
          </table>
      </div>;
    }
  }

ReactDOM.render(<Ads />, document.getElementById('ads'));