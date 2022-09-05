import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {globalStyle} from '../../globalStyle';
import {Header} from '../../components';
import {list} from '../../config/MasbahaList';
import {COLORS, SIZES, SPACING} from '../../config/themes';
import {GetAsyncStorage, SetAsyncStorage} from '../../config/helperFunctions';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Masbaha = () => {
  const getData = async () => {
    setLoading(true);
    let dataCounter = await GetAsyncStorage('counter');
    dataCounter = JSON.parse(dataCounter);
    console.log(dataCounter);
    if (dataCounter != null) {
      setItemCounter(dataCounter?.itemCounter);
      setTotalCounter(dataCounter?.totalCounter);
      setSelectedItem(dataCounter?.selectedItem);
    }
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  const [selectedItem, setSelectedItem] = useState(0);
  const [totalCounter, setTotalCounter] = useState(0);
  const [itemCounter, setItemCounter] = useState(0);
  const [loading, setLoading] = useState(true);

  const pressCounter = async () => {
    let total = totalCounter,
      itemCount = itemCounter,
      selectedI = selectedItem;
    setTotalCounter(totalCounter + 1);
    total = total + 1;
    if (itemCounter < list[selectedItem].repeatNumber) {
      setItemCounter(itemCounter + 1);
      itemCount = itemCount + 1;
    } else {
      if (selectedItem < list.length - 1) {
        setSelectedItem(selectedItem + 1);
        selectedI = selectedI + 1;
      } else {
        setSelectedItem(0);
        selectedI = 0;
      }
      setItemCounter(1);
      itemCount = 1;
    }

    await SetAsyncStorage('counter', {
      itemCounter: itemCount,
      totalCounter: total,
      selectedItem: selectedI,
    });
  };

  const RenderItem = ({item, index}) => {
    return (
      <>
        <View
          style={[
            styles.containerItem,
            {
              backgroundColor:
                selectedItem == index ? COLORS.secondary : COLORS.lightGray,
            },
          ]}>
          <Text
            style={[
              globalStyle.title,
              {
                marginVertical: SPACING.l,
                color: selectedItem == index ? COLORS.white : COLORS.black,
              },
            ]}>
            {item.title}
          </Text>
          <Text
            style={[
              styles.repeatNumber,
              {
                color: selectedItem == index ? COLORS.white : COLORS.black,
              },
            ]}>
            عدد مرات التكرار : {item.repeatNumber}
          </Text>
        </View>
      </>
    );
  };
  const BtnCounter = () => {
    return (
      <>
        {loading == false ? (
          <TouchableOpacity style={styles.BtnCounter} onPress={pressCounter}>
            <Text
              style={{
                fontSize: SIZES.title,
                fontWeight: '700',
                color: COLORS.white,
              }}>
              {list[selectedItem].title} ({itemCounter})
            </Text>
          </TouchableOpacity>
        ) : null}
      </>
    );
  };

  return (
    <View style={[globalStyle.container, {alignItems: 'center'}]}>
      <Header name="المسبحة" />
      {loading == false ? (
        <>
          <FlatList
            data={list}
            style={{width: '90%', maxHeight: SIZES.height * 0.6}}
            renderItem={RenderItem}
          />
          <View style={styles.totalCounterView}>
            <Text style={styles.totalCountertext}>{totalCounter}</Text>
          </View>

          <TouchableOpacity
            style={[
              styles.totalCounterView,
              {
                left: 0,
                right: null,
                borderTopLeftRadius: 0,
                borderTopRightRadius: SIZES.Sradius,
              },
            ]}
            onPress={() => {
              setItemCounter(0);
              setSelectedItem(0);
              setTotalCounter(0);
              AsyncStorage.removeItem('counter');
            }}>
            <Text style={styles.totalCountertext}>تكرار</Text>
          </TouchableOpacity>
          <BtnCounter />
        </>
      ) : null}
    </View>
  );
};

export default Masbaha;

const styles = StyleSheet.create({
  containerItem: {
    width: '100%',
    backgroundColor: COLORS.lightGray,
    marginBottom: SPACING.s,
    minHeight: SIZES.height * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.Sradius,
  },
  BtnCounter: {
    width: '50%',
    height: SIZES.height * 0.2,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.height,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  repeatNumber: {
    position: 'absolute',
    bottom: '1%',
    left: '3%',
  },
  totalCountertext: {
    marginVertical: SPACING.s,
    color: COLORS.white,
    marginHorizontal: SPACING.l,
    fontSize: SIZES.h2,
  },
  totalCounterView: {
    position: 'absolute',
    right: 0,
    backgroundColor: COLORS.secondary,
    elevation: 5,
    top: SIZES.height * 0.6,
    borderTopLeftRadius: SIZES.Sradius,
  },
});
