function button(text, name, group, parent, target){

  var button= function button(text, name, group, parent, target){
    this.clazz = group;
    this.id = group+name;
    this.name = name;
    this.text = text;
    this.parent = parent;
    this.target = target;
    this.init();
  };

  button.prototype = {
      init:function(){
          this.addButton();
          this.eventBinding();
      },
      template: function(){
          var child = document.createElement('div');
          child.innerHTML ='<button id="'+this.id+'" class="'+this.clazz+'">'+this.text+'</button>';
          return child;
      },
      addButton:function(){
        this.parent.appendChild(this.template());
        this.el = document.getElementById(this.id);
      },
      eventBinding:function(){
        var that = this;
        this.el.addEventListener('click',function(){
            if(that.text==='='){
              that.target.value = that.calculate();
              return;
            }
            that.target.value += that.text;
        });
      },
      calculate:function(){
        var sum = 0;
        var source = this.target.value;

        var stack = this.makeStack(source);
        for(var i=0; i<stack.length; i++){
          if(i===0) {
            sum += stack[i];
            continue;
          }

          if(stack[i]==='+') {
            sum += stack[i+1];
            continue;
          }

          if(stack[i]==='-') {
            sum -= stack[i+1];
            continue;
          }

        }
        return sum;
      },
      makeStack:function(source) {
        var stack = [];
        var number ='';
        for(var i=0; i<source.length; i++){
          if(i === source.length-1) {
            number += source[i];
            stack.push(Number(number));
          }

          if(!isNaN(Number(source[i]))) {
            number += source[i];
            continue;
          }

          if(source[i]==='+' || source[i]==='-') {
            stack.push(Number(number));
            stack.push(source[i]);
            number='';
            continue;
          }

          alert('계산 실패');
          return [];
        }
        return stack;
      }
  }

  return new button(text, name, group, parent, target);
};
