
import { FlatList } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { cottagesData } from '@/data/cottages';
import { BookableListItem } from '@/components/BookableListItem';
import { Bookable } from '../../data/Interfaces/bookableItemInterface';
import { boatsData } from '@/data/boats';

export default function Index() {
  return (
    <SafeAreaProvider>
      <FlatList
        data={(boatsData as Bookable[]).concat(cottagesData as Bookable[])}
        renderItem={({ item }) => <BookableListItem item={item} />}
        keyExtractor={(item: Bookable) => item.id}
        contentContainerStyle={{
          rowGap: 20,
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </SafeAreaProvider>
  );
}
