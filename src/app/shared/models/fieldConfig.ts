export interface FieldConfig {
    accessor: string;
    displayName: string;
    type: 'text' | 'date' | 'email' | 'number' | 'password' | 'select' | 'multiselect' | 'checkbox' | 'textarea' |'file' | 'radio';
    value?: any;
    disabled?: boolean,
    hideLabel?: boolean;
    placeholder?: string;
    validations?: { type: string; message: string; value?: any }[];
    options?: { view: string; value: string }[]; 
 }

 export interface Product{
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
  };
  images: string[];
}
