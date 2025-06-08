import { FlatList } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { cottagesData, type Cottage } from '@/data/cottages';
import { BookableListItem } from '@/components/BookableListItem';

export default function Demo() {
  return (
    <SafeAreaProvider>

      <FlatList
        data={cottagesData}
        renderItem={({ item }) => <BookableListItem item={item} />}
        keyExtractor={(item: Cottage) => item.id}
        contentContainerStyle={{
          rowGap: 20,
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />

    </SafeAreaProvider>
  )
}
