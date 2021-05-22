import React, { Fragment } from 'react'
import datastore from 'src/data/store'

export default class Control extends React.Component {
//  static propTypes = {
//    onChange: PropTypes.func.isRequired,
//    forID: PropTypes.string,
//    value: PropTypes.node,
//    classNameWrapper: PropTypes.string.isRequired,
//  }

  static defaultProps = {
    // value: [
    //   {
    //     "type": "skateboarder",
    //     "person": "don"
    //   },
    //   {
    //     "type": "director",
    //     "person": "chad"
    //   },
    //   {
    //     "type": "skateboarder",
    //     "person": "geralle"
    //   }
    // ]
  }

  state = {
    focusedField: {
      // index: 0
      // prop: 'type'
    }
  }

  // this.props.value
  // [
  //   { type: 'skateboarder', person: 'don' }
  // ]
  // handleChange: function(e) {
  //   const separator = this.props.field.get('separator', ', ')
  //   this.props.onChange(e.target.value.split(separator).map((e) => e.trim()));
  // },

  setHasFocus = (e) => {
    this.setState({
      focusedField: {
        index: Number(e.target.dataset.fieldIndex),
        prop: e.target.dataset.targetProp
      }
    })
  }

  handleChangeForIndex = (index) => {
    return (e) => {
      const creditValues = this.getCurrentCredits()
      if (index > creditValues.length - 1) { // create a new item if needed
        creditValues.push({})
      }

      const updatedCreditValues = creditValues.map((creditValue, i) => {
        if (i === index) {
          return {
            ...creditValue,
            [e.target.dataset.targetProp]: e.target.value
          }
        }

        return creditValue
      })

      this.props.onChange(updatedCreditValues)
    }
  }

  getCurrentCredits = () => {
    return JSON.parse(JSON.stringify(this.props.value || [{}]))
  }

  renderInputRow = (creditValue = null, valueIndex = 0) => {
    const { focusedField } = this.state

    return (
      <Fragment key={valueIndex}>
        <select
          id={!!creditValue ? undefined : this.props.forID}
          data-field-index={valueIndex}
          className="credits-select"
          value={creditValue ? creditValue.type : ''}
          data-target-prop="type"
          onChange={this.handleChangeForIndex(valueIndex)}
          onFocus={this.setHasFocus}
          autoFocus={focusedField.index === valueIndex && focusedField.prop === 'type'}
        >
          <option></option>
          {datastore.raw.credit.map(cred => (
            <option key={cred.uid} value={cred.uid}>{cred.displayName}</option>
          ))}
        </select>
        <select
          data-field-index={valueIndex}
          className="credits-select"
          value={creditValue ? creditValue.person : ''}
          data-target-prop="person"
          onChange={this.handleChangeForIndex(valueIndex)}
          onFocus={this.setHasFocus}
          autoFocus={focusedField.index === valueIndex && focusedField.prop === 'person'}
        >
          <option></option>
          {datastore.raw.people.map(person => (
            <option key={person.uid} value={person.uid}>{person.displayName}</option>
          ))}
        </select>
      </Fragment>
    )
  }

  render() {
    const { forID, classNameWrapper } = this.props;
    // const separator = this.props.field.get('separator', ', ');
    const creditValues = this.getCurrentCredits();
    // console.log('credits this.props.value', this.props.value)
    // console.log('credits render creditValues', creditValues)

    return (
      <div
        id={forID}
        className={classNameWrapper}
      >
        <div className="credits-grid-inputs">
          <label>Credit Type</label>
          <label>Credit Person</label>
          {creditValues.map(this.renderInputRow)}
          {this.renderInputRow(null, creditValues.length)}
        </div>
      </div>
    )
  }
}