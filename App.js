/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import axios from 'axios';
import DisplayImage from './src/components/DisplayImage';
const width = Dimensions.get('screen').width;

class App extends Component {
  state = {
    list: [],
    page: 1,
  };
  componentDidMount() {
    this.getImages();
  }

  getImages = () => {
    const {page, list} = this.state;
    const api_key = '18044252-b7d01f9e1ae927d32bad5c79f';

    axios
      .get(`https://pixabay.com/api?key=${api_key}&per_page=10&page=${page}`)
      .then((res) => {
        this.setState({
          list: page === 1 ? res.data.hits : [...list, ...res.data.hits],
        });
      });
  };

  getMoreImages = () => {
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => {
        this.getImages();
      },
    );
  };

  renderItem = ({item}) => <DisplayImage item={item} />;

  render() {
    return (
      <>
        <FlatList
          data={this.state.list}
          renderItem={this.renderItem}
          onEndReached={this.getMoreImages}
          keyExtractor={(item) => item.id.toString()}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
