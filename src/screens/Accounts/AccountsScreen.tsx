// src/screens/LandingScreen.tsx
import React from 'react';
import {
    View,
    StyleSheet,
    Alert,
    Image,
} from 'react-native';
import colors from '../../constants/colors';
import MainHeader from '../../components/Header/MainHeader';
import { Images } from '../../../assets/images';
import globalStyles from '../../styles/styles';
import { FlatList, Text } from 'react-native-gesture-handler';
import BackButton from '../../components/Button/BackButton';
import ButtonComponent from '../../components/Button/ButtonComponent';
import AccountCard from '../../components/Cards/AccountCard';
interface Item {
    id: number;
    name: string;
}
import { ImageSourcePropType } from 'react-native';

interface Account {
    id: number;
    image: ImageSourcePropType;
    title: string;
    subTitle: string;
    status: boolean;
}
const AccountsScreen = ({ navigation }: any) => {

    const [data, setData] = React.useState<Item[]>(Array.from({ length: 6 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` })));
    const [accounts, setAccounts] = React.useState<Account[]>([
        {
            id: 1,
            image: Images.email,
            title: 'Wells Fargo',
            subTitle: '14 days connected',
            status: true
        },
        {
            id: 2,
            image: Images.email,
            title: 'Apple Email',
            subTitle: '14 days connected',
            status: true

        },
        {
            id: 3,
            image: Images.email,
            title: 'DoorDash',
            subTitle: 'connected 14 days ago',
            status: false

        },
        {
            id: 3,
            image: Images.email,
            title: 'Capital One',
            subTitle: 'connected 14 days ago',
            status: true

        },
        {
            id: 3,
            image: Images.email,
            title: 'Instagram',
            subTitle: 'connected 14 days ago',
            status: true

        },
    ]);

    const [loading, setLoading] = React.useState(false);
    const [page, setPage] = React.useState(1);

    const handleDrawerToggle = () => {
        navigation.toggleDrawer(); // This will open/close the drawer
    };

    const handleRightIconPress = () => {
        Alert.alert('Handle Right Icon Pressed'); // Handle push notification logic
    };
    const handleHelpPress = () => {
        Alert.alert('Help', 'This is the help section for the card.');
    };
    const loadMore = async () => {
        if (loading) return;

        setLoading(true);
        setTimeout(() => {
            const newItems = Array.from({ length: 10 }, (_, i) => ({
                id: data.length + i + 1,
                name: `Item ${data.length + i + 1}`,
            }));
            setData(prevData => [...prevData, ...newItems]);
            setPage(prevPage => prevPage + 1);
            setLoading(false);
        }, 1000); // Simulate network delay
    };


    const renderHeader = () => (
        <View style={{ marginBottom: 20, marginHorizontal: 16 }}>
            <View style={styles.mainCard}>
                <Text style={{ ...globalStyles.H3Title, flex: 1, marginRight: 8, lineHeight: 25 }}>{"Strengthen your security by linking an account"}</Text>
                <BackButton
                    onPress={() => handleHelpPress()} // Provide a default no-op function
                    backgroundColor={colors.buttonTernarry} // Light gray background
                    icon={Images.questionIcon} // Replace with your back icon
                />
            </View>
            <Text style={{ ...globalStyles.H4Title, marginRight: 8, lineHeight: 25, textAlign: 'center', marginTop: 16 }}>{"By linking your account, the app can provide  visibility and control over your security settings and activity."}</Text>

        </View>
    );
    const renderFooter = () => (
        <ButtonComponent
            title="View more"
            marginLR={16}
            marginB={35}
            color={colors.buttonPrimary}
            onPress={() => loadMore()}
        />
    );
    const renderHeaderAccount = () => (
        <View style={{ marginBottom: 16, marginHorizontal: 16 , marginTop:20}}>
            <Text style={{ ...globalStyles.H3Title }}>{"Linked Accounts"}</Text>
        </View>
    );

    const renderRow = ({ item, index }: { item: Item; index: number }) => {
        const items = data.slice(index * 2, index * 2 + 2);
        return (
            <View style={styles.row}>
                {items.map((subItem, i) => (
                    <View
                        key={subItem.id}
                        style={[styles.cell, items.length === 1 ? styles.fullWidth : i === 0 && { marginRight: 10 }]}
                    >
                        <Image style={styles.logo} source={Images.ChaseBankLogo} />
                        <Text style={globalStyles.H4Title}>{'Chase Bank'}</Text>
                    </View>
                ))}
            </View>
        );
    };

    const handleDelete = (id: number) => {
        Alert.alert('Delete Account', 'Are you sure you want to delete this account?', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Delete',
                style: 'destructive',
                onPress: () => setAccounts(accounts.filter(account => account.id !== id)),
            },
        ]);
    };

    const renderItem = ({ item }: { item: Account }) => (
        <View style={{ paddingHorizontal: 20 }}>
            <AccountCard
                image={item.image}
                title={item.title}
                subTitle={item.subTitle}
                onDelete={() => handleDelete(item.id)}
                status={item.status}
            />
        </View>
    );

    return (
        <View style={{ flex: 1, backgroundColor: colors.primaryBackground, paddingBottom: 70 }}>
            <MainHeader
                title="Accounts" // Passing the title here
                onDrawerToggle={handleDrawerToggle} // Pass in the function to toggle the drawer
                rightIcon={Images.plusIcon} // Using Ionicons' search icon for the right icon
                onRightIconPress={handleRightIconPress} // Handle right icon press
            />
            {
                accounts.length > 0 ?
                    <FlatList
                        data={accounts}
                        keyExtractor={(item) => item.id.toString()}
                        ListHeaderComponent={renderHeaderAccount}
                        renderItem={renderItem}
                    /> :
                    <FlatList
                        style={{ paddingBottom: 35 }}
                        data={Array.from({ length: Math.ceil(data.length / 2) }, (_, index) => ({ id: index, name: `Item ${index}` }))}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderRow}
                        ListHeaderComponent={renderHeader}
                        ListFooterComponent={renderFooter}
                        contentContainerStyle={styles.list}
                    />

            }

        </View>

    );
};


export default AccountsScreen;

const styles = StyleSheet.create({
    mainCard: {
        flexDirection: 'row', padding: 12,
        alignItems: 'center',
        backgroundColor: colors.buttonSecondry,
        height: 86,
        borderColor: colors.buttonPrimary,
        borderWidth: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    }, logo: {
        width: 60,
        height: 45,
    },
    list: {
        padding: 10,
    },
    row: {
        marginHorizontal: 16,
        flexDirection: 'row',
        marginBottom: 10,
    },
    cell: {
        ...globalStyles.cardBox,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fullWidth: {
        flex: 1,
    },
    itemText: {
        fontSize: 16,
    },
    footer: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }, loadMoreButton: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
    },
    loadMoreText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

});
