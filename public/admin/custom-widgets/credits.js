(function(){

  const CreditsControl = createClass({

    // this.props.value
    // [
    //   { type: 'skateboarder', person: 'don' }
    // ]
    // handleChange: function(e) {
    //   const separator = this.props.field.get('separator', ', ')
    //   this.props.onChange(e.target.value.split(separator).map((e) => e.trim()));
    // },

    setHasFocus: function (e) {
      this.setState({
        focusedField: {
          index: Number(e.target.dataset.fieldIndex),
          prop: e.target.dataset.targetProp
        }
      })
    },

    // for debugging purposes
    // getDefaultProps: function() {
    //   return {
    //     value: [
    //       {
    //         "type": "skateboarder",
    //         "person": "don"
    //       },
    //       {
    //         "type": "director",
    //         "person": "chad"
    //       },
    //       {
    //         "type": "skateboarder",
    //         "person": "geralle"
    //       }
    //     ]
    //   }
    // },

    getInitialState: function() {
      return {
        focusedField: {
          // index: 0
          // prop: 'type'
        }
      }
    },

    handleChangeForIndex: function(index) {
      return (e) => {
        const creditValues = this.getCurrentCredits();
        if (index > creditValues.length - 1) { // create a new item if needed
          creditValues.push({})
        }

        // console.log('e.target.dataset', e.target.dataset, 'e.target.value', e.target.value, index)

        const updatedCreditValues = creditValues.map((creditValue, i) => {
          if (i === index) {
            // console.log('e.target.dataset', e.target.dataset)
            return {
              ...creditValue,
              [e.target.dataset.targetProp]: e.target.value
            }
          }

          return creditValue
        })
        
        // console.log('creditValues', creditValues)
        // console.log('updatedCreditValues', updatedCreditValues)

        this.props.onChange(updatedCreditValues)
      }
    },

    getCurrentCredits: function() {
      return JSON.parse(JSON.stringify(this.props.value || [{}]))
    },

    renderInputRow: function(creditValue = null, valueIndex = 0) {
      const { focusedField } = this.state
      // console.log('focusedField', focusedField)

      return [
        h('input', {
          id: !!creditValue ? undefined : this.props.forID,
          'data-field-index': valueIndex,
          type: 'text',
          className: 'credits-input',
          value: creditValue ? creditValue.type : '',
          'data-target-prop': 'type',
          placeholder: 'skateboarder',
          onChange: this.handleChangeForIndex(valueIndex),
          onFocus: this.setHasFocus,
          autoFocus: focusedField.index === valueIndex && focusedField.prop === 'type'
        }),
        h('input', {
          'data-field-index': valueIndex,
          type: 'text',
          className: 'credits-input',
          value: creditValue ? creditValue.person : '',
          'data-target-prop': 'person',
          placeholder: 'don',
          onChange: this.handleChangeForIndex(valueIndex),
          onFocus: this.setHasFocus,
          autoFocus: focusedField.index === valueIndex && focusedField.prop === 'person'
        })
      ]
    },
  
    render: function() {
      // const separator = this.props.field.get('separator', ', ');
      const creditValues = this.getCurrentCredits();
      // console.log('credits this.props.value', this.props.value)
      // console.log('credits render creditValues', creditValues)

      return [
        h('div', {
          className: this.props.classNameWrapper,
          children: [
            h('div', { className: 'credits-grid-inputs' }, [
              h('label', {}, 'Credit Type'),
              h('label', {}, 'Credit Person'),
              ...creditValues.map((creditValue, i) => this.renderInputRow(creditValue, i)),
              ...this.renderInputRow(null, creditValues.length)
            ])
          ]
        }),
      ]
    },
  });
  
  const creditsOptions = [
    'director',
    'filmer',
    'photographer',
    'skateboarder'
  ]
  
  const CreditsPreview = createClass({
    render: function() {
      const credits = this.props.value;

      return h('dl', {},
        credits.map((credit, index) => {
          return [
            h('dt', {key: index}, credit.type),
            h('dd', {key: index}, credit.person)
          ];
        })
      );
    }
  });
  
  const schema = {
    properties: {
      separator: { type: 'string' },
    },
  }

  CMS.registerWidget('credits', CreditsControl, CreditsPreview, schema);

})()