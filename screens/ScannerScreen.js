import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import { BarCodeScanner, Camera, Permissions } from 'expo';


class Scanner extends React.Component<Props, State> {
  state = {
    hasCameraPermission: null,
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
    this.props.navigation.navigate('HomeScreen');
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return (
        <View>
          <Text>Waiting for camera permission...</Text>
        </View>
      );
    }
    if (hasCameraPermission === false) {
      return (
        <View>
          <Text>No access to the camera.</Text>
        </View>
      );
    }

    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.back()}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Camera
          onBarCodeScanned={console.log}
          barCodeScannerSettings={{
            barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
          }}
          type={BarCodeScanner.Constants.Type.front}
        >
          <Text>Something inside.</Text>
        </Camera>
      </View>
    );
  }
}

export default Scanner;
