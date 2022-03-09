import {useFocusEffect} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import FormInputView from '../../components/FormInputView';
import {styles} from '../../constants/styles';

const innitialVal = {
  name: '',
  age: '',
  gender: '',
  dob: '',
  mobile: '',
  courseType: '',
  institute: '',
  course: '',
};

const AddStudentView = props => {
  const [form, setForm] = useState(innitialVal);
//   useFocusEffect(() => {
//     console.log('dsjkfhksjdsad');
//     setForm(innitialVal);
//   });

  const onChangeText = (key, val) => {
    setForm({...form, ...{[key]: val}});
    // setVal(val);
  };

  return (
    <View style={styles.container}>
      <Text>AddStudent</Text>
      <FormInputView
        id={'name'}
        title={'Name'}
        onChangeText={onChangeText}
        value={form['name']}
      />
      <FormInputView
        id={'age'}
        title={'Age'}
        onChangeText={onChangeText}
        value={form['age']}
      />
      <FormInputView
        id={'gender'}
        title={'Gender'}
        onChangeText={onChangeText}
        value={form['gender']}
      />
      <FormInputView
        id={'dob'}
        title={'DOB'}
        onChangeText={onChangeText}
        value={form['dob']}
      />
      <FormInputView
        id={'mobile'}
        title={'Mobile'}
        onChangeText={onChangeText}
        value={form['mobile']}
      />
      <FormInputView
        id={'courseType'}
        title={'Course Type'}
        onChangeText={onChangeText}
        value={form['courseType']}
      />
      <FormInputView
        id={'institute'}
        title={'Institute'}
        onChangeText={onChangeText}
        value={form['institute']}
      />
      <FormInputView
        id={'course'}
        title={'Course'}
        onChangeText={onChangeText}
        value={form['course']}
      />
    </View>
  );
};

export default AddStudentView;
