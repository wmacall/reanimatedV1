import React, {useState, useRef, useEffect} from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Transitioning, Transition} from 'react-native-reanimated';
import Header from '../../components/Header';
import styles from './styles';

function Sequence() {
  const transition = (
    <Transition.Sequence>
      <Transition.In type="scale" interpolation="easeIn" />
      <Transition.Change interpolation="easeOut" />
    </Transition.Sequence>
  );

  let [isLoading, setIsLoading] = useState(true);
  const ref = useRef();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      ref?.current.animateNextTransition();
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Transitioning.View ref={ref} transition={transition}>
          {!isLoading
            ? Array.from({length: 20}).map((_, i) => (
                <View key={i} style={styles.card}>
                  <Text>{i}</Text>
                </View>
              ))
            : null}
        </Transitioning.View>
      </ScrollView>
    </View>
  );
}

export default Sequence;
