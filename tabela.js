class Tabela extends React.Component {
   constructor(props) {
      super(props) 
      this.state = { 
         components: [
            { id: 1, disciplina: 'Sistemas Operacionais', carga: 66.7, periodo: 'Noturno' },
            { id: 2, disciplina: 'Inglês', carga: 33.3, periodo: 'Noturno' },
            { id: 3, disciplina: 'Laboratório de Estruturas de Dados e Programação', carga: 33.3, periodo: 'Noturno' },
            { id: 4, disciplina: 'Introdução a Banco de Dados', carga: 66.7, periodo: 'Noturno' }
         ]
      }
   }

    renderTable() {
      let header = Object.keys(this.state.components[0]).splice(1,3);      
      console.log(header);
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   renderTableData() {
      return this.state.components.map((componente, index) => {
         const { id, disciplina, carga, periodo } = componente //destructuring
         return (
            <tr key={id}>               
               <td>{disciplina}</td>
               <td>{carga}</td>
               <td>{periodo}</td>
            </tr>
         )
      })
   }


   render() { 
      return (
         <div>
            <h2 id='title'>Componentes curriculares</h2>
            <table id='components'>
               <tbody>
                  <tr>{this.renderTable()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

ReactDOM.render(<Tabela />, document.getElementById('tabelareact'));
