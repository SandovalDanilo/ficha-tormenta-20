import React from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

class CustomSelect extends React.Component {
  style = () => {
    const propsStyle = this.props.style || {};
    const targetHeight = propsStyle.targetHeight || 26;

    return {
      control: provided => ({
        ...provided,
        border: 'none',
        borderBottom: '1px solid #000',
        borderRadius: "0px",
        minHeight: 'initial',
        ...propsStyle.control || {}
      }),
      valueContainer: provided => ({
        ...provided,
        height: `${targetHeight - 1 - 1}px`,
        padding: 0,
        ...propsStyle.valueContainer || {}
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
      singleValue: provided => ({
        ...provided,
        color: "#000",
      }),
    }
  }

  render() {
    if (this.props.creatable === false) {
      return (
        <Select options={this.props.options}
                value={this.props.value}
                onChange={this.props.onChange}
                styles={this.style()} />
      );
    } else {
      return (
        <CreatableSelect options={this.props.options}
                        value={this.props.value}
                        onChange={this.props.onChange}
                        styles={this.style()} />
      );
    }
  }
}

export default CustomSelect;