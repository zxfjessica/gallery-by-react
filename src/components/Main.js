require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
let imgData = require('json!../data/imgdata.json');
//转化为路径信息
imgData =( function imgGene(imgDataArr){
	
	for(var i=0;i<imgDataArr.length;i++){
		var imgDataItem = imgDataArr[i];
		imgDataItem.img = require('../images/'+(i+1)+'.png');
		imgDataArr[i] = imgDataItem;
	}
	return imgDataArr;
})(imgData);
class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
      	<section>
      		xianshi 
      	</section>
      	<nav>

      	</nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
