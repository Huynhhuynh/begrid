
# Begrid

Begrid updated from Isotobe js. [Demo](https://huynhhuynh.github.io/begrid/)

  

### Usage

```html
<script src="jquery.min.js"></script>
<script src="isotope.min.js"></script>
<script src="begrid.min.js"></script>

<div id="grid-1">
	<div class="item-sizer"></div>
	<div class="item-gutter-sizer"></div>
	<div class="item"><img src="./images/1.png" alt="#"></div>
	<div class="item"><img src="./images/2.png" alt="#"></div>
	...
</div>
  
<script>
	var Grid = new window.BeGrid( {
		El: document.getElementById( 'grid-1' ),
		Col: 3,
	} );
</script>
```

### Settings
| Option | type |  Default | Description |
|--|--|--|--|
| El |  | .item |  |
| ItemSelector |
| ColumnWidth |  | .item-sizer |
| Gutter |  | .item-gutter-sizer |
| Col |  | 4 |
| Space |  | 24 |
| CustomClass |
| Responsive |

### Refresh
```javascript
Grid.GetGrid().trigger( '__refresh' );

// Refresh with new options 
Grid.GetGrid().trigger( '__refresh', [{
	Col: 3,
	Space: 30,
}] )
```
