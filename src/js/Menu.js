
var React = require('react'); 
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var Menu = createReactClass({ 
	getInitialState() {
		return {
			items: require('./data.js')
		}
	}, 

	renderItems(item) {
		return (
			<article key={ item.id } id={ item.id } className="menu-category">
				<h1 className="category-header">{ item.category }</h1>
			</article>
		);
	}, 

	render() {
		return (
			<div>
				{this.state.items.map( this.renderItems )}
			</div>
		); 
	}
}); 

ReactDOM.render(<Menu />, document.getElementById('menu-component'));
