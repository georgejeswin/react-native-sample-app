import { Formik } from 'formik';
import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import globalStyles from '../styles/globalStyles';
import * as yup from 'yup';


const ReviewSchema=yup.object({
    title:yup.string()
    .required()
    .min(4),
    body:yup.string()
    .required()
    .min(5),
    rating:yup.string()
    .required()
    .test('is-num-1-5','Rating must be number between 1 and 5',(val)=>{
        return parseInt(val) < 6 && parseInt(val) > 0;
    })
})

const ReviewForm = ({addReview}) => {
    return (
        <View style={globalStyles.container}>
            <Formik
            initialValues={{title:'',body:'',rating:''}}
            validationSchema={ReviewSchema}
            onSubmit={(values,actions)=>{
                actions.resetForm();
                addReview(values);
            }}
            >
                {(props)=>(
                    <View>
                        <TextInput
                        style={styles.input}
                        placeholder='Review Title'
                        onChangeText={props.handleChange('title')}
                        value={props.values.title}
                        />
                        <TextInput
                        style={styles.input}
                        placeholder='Review Body'
                        onChangeText={props.handleChange('body')}
                        value={props.values.body}
                        multiline
                        />
                        <TextInput
                        style={styles.input}
                        placeholder='Rating (1-5)'
                        onChangeText={props.handleChange('rating')}
                        value={props.values.rating}
                        keyboardType='numeric'
                        />
                        <Button title='submit' color='maroon' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default ReviewForm;

const styles = StyleSheet.create({
    input:{
        borderColor:'#ddd',
        padding:10,
        borderRadius:6,
        fontSize:18,
        borderWidth:1,
        width:319,
        marginVertical:20
    }
})
