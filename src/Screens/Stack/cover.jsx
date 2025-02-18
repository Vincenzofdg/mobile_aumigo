import {Fragment} from 'react';
import {StyleSheet, Dimensions, SafeAreaView, View} from 'react-native';

import str from '../../languages';
import Background from '../../components/background';
import {CoverButton} from '../../components/Buttons';

const {height, width} = Dimensions.get('screen');

function CoverScreen() {
    return (
        <>
            <Background name="Cover" />
            <SafeAreaView style={styles.container}>
                <View style={styles.buttons}>
                    {str.cover.buttons.map((name, i, arr) => (
                        <Fragment key={`cover-btn-${i}`}>
                            {arr.length - 1 === i && (
                                <View style={styles.bar} />
                            )}
                            <CoverButton name={name} />
                        </Fragment>
                    ))}
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttons: {
        padding: 15,
        marginBottom: height * 0.02,
    },
    bar: {
        backgroundColor: '#484848',
        opacity: 0.7,
        width: width * 0.3,
        height: height * 0.005,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 30,
        borderRadius: 20,
    },
});

export default CoverScreen;
