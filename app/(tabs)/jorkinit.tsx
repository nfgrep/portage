import { FlatList, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, ListItem } from 'tamagui'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function CottageList({ item }: { item: any }) {
  return <ListItem title={item.title}/>
}

export default function Demo() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={({item}) => <CottageList item={item} />}
          keyExtractor={item => item.id}
        />
        <Button>Jorking it crazy style!!!</Button>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}