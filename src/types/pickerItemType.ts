/**
 * Picker için her öğenin tipi. 'label' arama için, 'display' görsel içerik için kullanılır.
 * Type for each Picker item. 'label' is used for filtering, 'display' for rendering custom content.
 */
export type PickerItemType = {
  value: string | number;
  label?: string; // Arama için metin desteği
  display?: React.ReactNode; // Görüntüde gösterilecek özel içerik
};
