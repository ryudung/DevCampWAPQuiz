var main = {
  numberButtons:[],
  operatorButtons:[],
  inputBox:{},
  parent: document.getElementById('calculator_body'),
  init: function(){
    this.inputBox =inputBox('inputBox',this.parent);

    for(var i=0; i<10; i++){
      this.numberButtons.push(this.makeButton(i,i,'number', this.parent, this.inputBox.el));
    }
    this.operatorButtons.push(this.makeButton('+', 'plus', 'operator', this.parent, this.inputBox.el));
    this.operatorButtons.push(this.makeButton('-', 'minus', 'operator', this.parent, this.inputBox.el));
    this.operatorButtons.push(this.makeButton('=', 'result', 'operator', this.parent, this.inputBox.el));


  },
  makeButton:function(text, name, group, parent, target){
    return button(text, name, group, parent, target);
  }
};

main.init();
