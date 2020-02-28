import React from 'react';
import CreatableSelect from 'react-select/creatable';

const targetHeight = 26;

const style = {
  control: (provided, state) => ({
    ...provided,
    border: 'none',
    borderBottom: '1px solid #000',
    borderRadius: "0px",
    color: 'red',
    minHeight: 'initial',
  }),
  valueContainer: provided => ({
    ...provided,
    height: `${targetHeight - 1 - 1}px`,
    padding: '0 8px',
  }),
  clearIndicator: provided => ({
    ...provided,
    padding: `${(targetHeight - 20 - 1 - 1) / 2}px`,
  }),
  dropdownIndicator: provided => ({
    ...provided,
    padding: `${(targetHeight - 20 - 1 - 1) / 2}px`,
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: "none"
  }),
  input: (provided, state) => ({
    ...provided,
  }),
}

class AtaqueSelect extends React.Component {
  render() {
    console.log(this.props.value);
    
    return (
      <CreatableSelect options={Armas}
                      //  defaultValue={this.props.value}
                      //  defaultInputValue={this.props.value}
                       value={this.props.value}
                      //  inputValue={this.props.value}
                       onChange={this.props.onChange}
                       styles={style} />
    );
  }
}

const Armas = [
  {
    label: "Simples, Corpo a Corpo",
    options: [
      {
        value: "adaga",
        label: "Adaga",
        dano: "1d4",
        critico: "19",
        tipo: "Perfuração",
        alcance: "Curto",
        pericias: ["luta", "pontaria"]
      },
    ]
  },
  {
    label: "Simples, Distância",
    options: [
      {
        value: "arco_curto",
        label: "Arco curto",
        dano: "1d6",
        critico: "x3",
        tipo: "Perfuração",
        alcance: "Médio",
        pericias: ["pontaria"]
      },
    ]
  },
  {
    label: "Marciais, Corpo a Corpo",
    options: [
      {
        value: "espada_longa",
        label: "Espada longa",
        dano: "1d8",
        critico: "19",
        tipo: "Corte",
        alcance: "Melee",
        pericias: ["luta"]
      },
    ]
  },
  {
    label: "Marciais, Distância",
    options: [
      {
        value: "arco_longo",
        label: "Arco longo",
        dano: "1d6",
        critico: "x3",
        tipo: "Perfuração",
        alcance: "Médio",
        pericias: ["pontaria"]
      },
    ]
  },
]

export default AtaqueSelect;
export { Armas };