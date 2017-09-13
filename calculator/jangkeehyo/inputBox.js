function inputBox(id, parent){

  var inputBox = function inputBox(id, parent){
    this.id = id;
    this.parent = parent;
    this.init();

  };

  inputBox.prototype={
      init:function(){
        this.addInputBox();
        this.eventBinding();
      },
      template: function(){
          var child = document.createElement('div');
          child.innerHTML ='<input type="text" id="'+this.id+'"/>';
          return child;
      },
      addInputBox:function(){
        this.parent.appendChild(this.template());
        this.el= document.getElementById(this.id);
      },
      eventBinding:function(){}
  }

  return new inputBox(id, parent);
};
