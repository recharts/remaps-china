"use strict"

import React from 'react';
import ReactDOM from 'react-dom';
import {MapContainer, Maps} from 'remaps';

const newData = [
  {name: '甘肃', title: '浙江省 － 四川省', value: 4413, index: 0},
  {name: '青海', title: '浙江省 － 四川省', value: 443, index: 1},
  {name: '广西', title: '浙江省 － 四川省', value: 3213, index: 2},
  {name: '贵州', title: '浙江省 － 四川省', value: 3213, index: 3},
  {name: '重庆', title: '浙江省 － 四川省', value: 3343, index: 4},
  {name: '北京', title: '浙江省 － 四川省', value: 3213, index: 5},
  {name: '福建', title: '浙江省 － 四川省', value: 3413, index: 6},
  {name: '安徽', title: '浙江省 － 四川省', value: 323, index: 7},
  {name: '广东', title: '浙江省 － 四川省', value: 3223, index: 8},
  {name: '西藏', title: '浙江省 － 四川省', value: 344, index: 9},
  {name: '新疆', title: '浙江省 － 四川省', value: 3233, index: 10},
  {name: '海南', title: '浙江省 － 四川省', value: 3213, index: 11},
  {name: '宁夏', title: '浙江省 － 四川省', value: 3213, index: 13},
  {name: '陕西', title: '浙江省 － 四川省', value: 313, index: 14},
  {name: '山西', title: '浙江省 － 四川省', value: 13, index: 15},
  {name: '湖北', title: '浙江省 － 四川省', value: 1213, index: 16},
  {name: '湖南', title: '浙江省 － 四川省', value: 8413, index: 17},
  {name: '四川', title: '浙江省 － 四川省', value: 9413, index: 18},
  {name: '云南', title: '浙江省 － 四川省', value: 4543, index: 19},
  {name: '河北', title: '浙江省 － 四川省', value: 1113, index: 20},
  {name: '河南', title: '浙江省 － 四川省', value: 2213, index: 21},
  {name: '辽宁', title: '浙江省 － 四川省', value: 433, index: 22},
  {name: '山东', title: '浙江省 － 四川省', value: 1213, index: 23},
  {name: '天津', title: '浙江省 － 四川省', value: 233, index: 24},
  {name: '江西', title: '浙江省 － 四川省', value: 11113, index: 25},
  {name: '江苏', title: '浙江省 － 四川省', value: 653, index: 26},
  {name: '上海', title: '浙江省 － 四川省', value: 7713, index: 27},
  {name: '浙江', title: '浙江省 － 四川省', value: 554, index: 28},
  {name: '吉林', title: '浙江省 － 四川省', value: 231, index: 29},
  {name: '内蒙古', title: '浙江省 － 四川省', value: 3213, index: 30},
  {name: '黑龙江', title: '浙江省 － 四川省', value: 4343, index: 31},
  {name: '台湾', title: '浙江省 － 四川省', value: 665, index: 32},
  {name: '香港', title: '浙江省 － 四川省', value: 4544, index: 33},
  {name: '澳门', title: '浙江省 － 四川省', value: 2321, index: 34}
];

export default React.createClass({

  getInitialState() {
    return {
      value: '中国',
      mapName: '中国',
    };
  },

  popupContent(data) {
    if (data) {
      return (
        <div>
          <p>
            <span>{data.name}</span>
          </p>
          <p>
            <span>模拟数据：</span>
            <span>{data.value}</span>
          </p>
          <p>
            <span>模拟数据：</span>
            <span>{data.index}</span>
          </p>
        </div>
      );
    } else {
      return null;
    }
  },

  render() {
    const width = 600;

    return (
      <div className='simple-maps'>
        <MapContainer
          className={"mapContainer"}
          width= {width}
          zoom= {true}
          extData= {newData}
          nameKey= {'name'}
          valueKey= {'value'}
          colorArr= {['#C6C9EE', '#B9BCED', '#AAADF0', '#8C90EF', '#6670F5']}
          defaultColor= {'#CACACA'}
          hoverColor= {'#FCE687'}
          hasLegend= {true}
          legendPos= {[50, 20]}
          popupContent= {this.popupContent}
        >
        </MapContainer>
      </div>
    );
  }
});


