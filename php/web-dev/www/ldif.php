<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>PHP Test</title>

    <style type="text/css" id="treeview1-style"> .treeview .list-group-item{cursor:pointer}.treeview span.indent{margin-left:10px;margin-right:10px}.treeview span.icon{width:12px;margin-right:5px}.treeview .node-disabled{color:silver;cursor:not-allowed}.node-treeview1{}.node-treeview1:not(.node-disabled):hover{background-color:#F5F5F5;} </style><style type="text/css" id="treeview2-style"> .treeview .list-group-item{cursor:pointer}.treeview span.indent{margin-left:10px;margin-right:10px}.treeview span.icon{width:12px;margin-right:5px}.treeview .node-disabled{color:silver;cursor:not-allowed}.node-treeview2{}.node-treeview2:not(.node-disabled):hover{background-color:#F5F5F5;} </style><style type="text/css" id="treeview3-style"> .treeview .list-group-item{cursor:pointer}.treeview span.indent{margin-left:10px;margin-right:10px}.treeview span.icon{width:12px;margin-right:5px}.treeview .node-disabled{color:silver;cursor:not-allowed}.node-treeview3{}.node-treeview3:not(.node-disabled):hover{background-color:#F5F5F5;} </style><style type="text/css" id="treeview4-style"> .treeview .list-group-item{cursor:pointer}.treeview span.indent{margin-left:10px;margin-right:10px}.treeview span.icon{width:12px;margin-right:5px}.treeview .node-disabled{color:silver;cursor:not-allowed}.node-treeview4{color:#428bca;}.node-treeview4:not(.node-disabled):hover{background-color:#F5F5F5;} </style><style type="text/css" id="treeview5-style"> .treeview .list-group-item{cursor:pointer}.treeview span.indent{margin-left:10px;margin-right:10px}.treeview span.icon{width:12px;margin-right:5px}.treeview .node-disabled{color:silver;cursor:not-allowed}.node-treeview5{color:#428bca;}.node-treeview5:not(.node-disabled):hover{background-color:#F5F5F5;} </style><style type="text/css" id="treeview6-style"> .treeview .list-group-item{cursor:pointer}.treeview span.indent{margin-left:10px;margin-right:10px}.treeview span.icon{width:12px;margin-right:5px}.treeview .node-disabled{color:silver;cursor:not-allowed}.node-treeview6{color:#428bca;}.node-treeview6:not(.node-disabled):hover{background-color:#F5F5F5;} </style><style type="text/css" id="treeview7-style"> .treeview .list-group-item{cursor:pointer}.treeview span.indent{margin-left:10px;margin-right:10px}.treeview span.icon{width:12px;margin-right:5px}.treeview .node-disabled{color:silver;cursor:not-allowed}.node-treeview7{color:#428bca;border:none;}.node-treeview7:not(.node-disabled):hover{background-color:#F5F5F5;} </style><style type="text/css" id="treeview8-style"> .treeview .list-group-item{cursor:pointer}.treeview span.indent{margin-left:10px;margin-right:10px}.treeview span.icon{width:12px;margin-right:5px}.treeview .node-disabled{color:silver;cursor:not-allowed}.node-treeview8{color:yellow;background-color:purple;border:none;}.node-treeview8:not(.node-disabled):hover{background-color:orange;} </style><style type="text/css" id="treeview9-style"> .treeview .list-group-item{cursor:pointer}.treeview span.indent{margin-left:10px;margin-right:10px}.treeview span.icon{width:12px;margin-right:5px}.treeview .node-disabled{color:silver;cursor:not-allowed}.node-treeview9{color:yellow;background-color:purple;border:none;}.node-treeview9:not(.node-disabled):hover{background-color:orange;} </style><style type="text/css" id="treeview10-style"> .treeview .list-group-item{cursor:pointer}.treeview span.indent{margin-left:10px;margin-right:10px}.treeview span.icon{width:12px;margin-right:5px}.treeview .node-disabled{color:silver;cursor:not-allowed}.node-treeview10{color:#428bca;}.node-treeview10:not(.node-disabled):hover{background-color:#F5F5F5;} </style><style type="text/css" id="treeview-searchable-style"> .treeview .list-group-item{cursor:pointer}.treeview span.indent{margin-left:10px;margin-right:10px}.treeview span.icon{width:12px;margin-right:5px}.treeview .node-disabled{color:silver;cursor:not-allowed}.node-treeview-searchable{}.node-treeview-searchable:not(.node-disabled):hover{background-color:#F5F5F5;} </style><style type="text/css" id="treeview-selectable-style"> .treeview .list-group-item{cursor:pointer}.treeview span.indent{margin-left:10px;margin-right:10px}.treeview span.icon{width:12px;margin-right:5px}.treeview .node-disabled{color:silver;cursor:not-allowed}.node-treeview-selectable{}.node-treeview-selectable:not(.node-disabled):hover{background-color:#F5F5F5;} </style><style type="text/css" id="treeview-expandible-style"> .treeview .list-group-item{cursor:pointer}.treeview span.indent{margin-left:10px;margin-right:10px}.treeview span.icon{width:12px;margin-right:5px}.treeview .node-disabled{color:silver;cursor:not-allowed}.node-treeview-expandible{}.node-treeview-expandible:not(.node-disabled):hover{background-color:#F5F5F5;} </style><style type="text/css" id="treeview-checkable-style"> .treeview .list-group-item{cursor:pointer}.treeview span.indent{margin-left:10px;margin-right:10px}.treeview span.icon{width:12px;margin-right:5px}.treeview .node-disabled{color:silver;cursor:not-allowed}.node-treeview-checkable{}.node-treeview-checkable:not(.node-disabled):hover{background-color:#F5F5F5;} </style><style type="text/css" id="treeview-disabled-style"> .treeview .list-group-item{cursor:pointer}.treeview span.indent{margin-left:10px;margin-right:10px}.treeview span.icon{width:12px;margin-right:5px}.treeview .node-disabled{color:silver;cursor:not-allowed}.node-treeview-disabled{}.node-treeview-disabled:not(.node-disabled):hover{background-color:#F5F5F5;} </style><style type="text/css" id="treeview12-style"> .treeview .list-group-item{cursor:pointer}.treeview span.indent{margin-left:10px;margin-right:10px}.treeview span.icon{width:12px;margin-right:5px}.treeview .node-disabled{color:silver;cursor:not-allowed}.node-treeview12{}.node-treeview12:not(.node-disabled):hover{background-color:#F5F5F5;} </style>
</head>
<body>

  <div id="treeview1" class="treeview">
    <ul class="list-group">
      <li class="list-group-item node-treeview1" data-nodeid="0" style="color:undefined;background-color:undefined;">
        <span class="icon expand-icon glyphicon glyphicon-minus"></span>
        <span class="icon node-icon"></span>Parent 1</li>
      <li class="list-group-item node-treeview1" data-nodeid="1" style="color:undefined;background-color:undefined;">
        <span class="indent"></span>
        <span class="icon expand-icon glyphicon glyphicon-minus"></span>
        <span class="icon node-icon"></span>Child 1</li>
      <li class="list-group-item node-treeview1" data-nodeid="2" style="color:undefined;background-color:undefined;">
        <span class="indent"></span>
        <span class="indent"></span>
        <span class="icon glyphicon"></span>
        <span class="icon node-icon"></span>Grandchild 1</li>
      <li class="list-group-item node-treeview1" data-nodeid="3" style="color:undefined;background-color:undefined;">
        <span class="indent"></span><span class="indent"></span>
        <span class="icon glyphicon"></span>
        <span class="icon node-icon"></span>Grandchild 2</li>
      <li class="list-group-item node-treeview1" data-nodeid="4" style="color:undefined;background-color:undefined;">
        <span class="indent"></span>
        <span class="icon glyphicon"></span>
        <span class="icon node-icon"></span>Child 2</li>
      <li class="list-group-item node-treeview1" data-nodeid="5" style="color:undefined;background-color:undefined;">
        <span class="icon glyphicon"></span>
        <span class="icon node-icon"></span>Parent 2</li>
      <li class="list-group-item node-treeview1" data-nodeid="6" style="color:undefined;background-color:undefined;">
        <span class="icon glyphicon"></span>
        <span class="icon node-icon"></span>Parent 3</li>
      <li class="list-group-item node-treeview1" data-nodeid="7" style="color:undefined;background-color:undefined;">
        <span class="icon glyphicon"></span>
        <span class="icon node-icon"></span>Parent 4</li>
      <li class="list-group-item node-treeview1" data-nodeid="8" style="color:undefined;background-color:undefined;">
        <span class="icon glyphicon"></span>
        <span class="icon node-icon"></span>Parent 5</li>
    </ul>
  </div>

  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

</body>
</html>

