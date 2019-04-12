import { ModalData } from 'src/app/models/modalData';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class MockedData {
    getproducts: ModalData[] = [
        {
             'title': 'Test Content-1',
             'content': 'Do to be agreeable conveying oh assurance. ',
             'buttonHeader': 'Modal-1'
         },
        {  'title': 'Jimmy Carter',
           'content': 'Do to be agreeable conveying oh assurance. Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the. Abode stuff noisy manor blush yet the far. Up colonel so between removed so do. Years use place decay sex worth drift age. Men lasting out end article express fortune demands own charmed. About are are money ask how seven',
           'buttonHeader': 'Modal-2'
         },
        {  'title': 'Frightening Truths',
          'content': 'Suppose end get boy warrant general natural. Delightful met sufficient projection ask. Decisively everything principles if preference do impression of. Preserved oh so difficult repulsive on in household. In what do miss time be. Valley as be appear cannot so by. Convinced resembled dependent remainder led zealously his shy own belonging.',
          'buttonHeader': 'button-3'
         }
     ];
  }
