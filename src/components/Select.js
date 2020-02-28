import React from 'react';
import CreatableSelect from 'react-select/creatable';

const targetHeight = 26;

const style = {
  control: provided => ({
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
    padding: '0 3px',
  }),
  clearIndicator: provided => ({
    ...provided,
    padding: `${(targetHeight - 20 - 1 - 1) / 2}px`,
  }),
  dropdownIndicator: provided => ({
    ...provided,
    padding: `${(targetHeight - 20 - 1 - 1) / 2}px`,
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: "none"
  }),
}

class Select extends React.Component {
  render() {
    return (
      <CreatableSelect options={this.props.options}
                       value={this.props.value}
                       onChange={this.props.onChange}
                       styles={style} />
    );
  }
}

export default Select;