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
        return eval(this.target.value);
      }
  }

  return new button(text, name, group, parent, target);
};
