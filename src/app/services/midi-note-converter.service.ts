import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MidiNoteConverterService {

  constructor() { }

  public midiNoteConverter(input: any): string
  {
    // if (Array.isArray(input))
    // {
      // for (var i = 0; i < input.length; i++)
      // {
      //   switch (input[i])
      //   {
      //     //C
      //     case 0:
      //     case 12:
      //     case 24:
      //     case 36:
      //     case 48:
      //     case 60:
      //     case 72:
      //     case 84:
      //     case 96:
      //     case 108:
      //     case 120:
      //       input[i] = 'C '
      //       break;
      //     //Db
      //     case 1:
      //     case 13:
      //     case 25:
      //     case 37:
      //     case 49:
      //     case 61:
      //     case 73:
      //     case 85:
      //     case 97:
      //     case 109:
      //       input[i] = 'Db '
      //       break;
      //     //D
      //     case 2:
      //     case 14:
      //     case 26:
      //     case 38:
      //     case 50:
      //     case 62:
      //     case 74:
      //     case 86:
      //     case 98:
      //     case 110:
      //       input[i] = 'D '
      //       break;
      //     //Eb
      //     case 3:
      //     case 15:
      //     case 27:
      //     case 39:
      //     case 51:
      //     case 63:
      //     case 75:
      //     case 87:
      //     case 99:
      //     case 111:
      //       input[i] = 'Eb '
      //       break;
      //     //E
      //     case 4:
      //     case 16:
      //     case 28:
      //     case 40:
      //     case 52:
      //     case 64:
      //     case 76:
      //     case 88:
      //     case 100:
      //     case 112:
      //       input[i] = 'E '
      //       break;
      //     //F
      //     case 5:
      //     case 17:
      //     case 29:
      //     case 41:
      //     case 53:
      //     case 65:
      //     case 77:
      //     case 89:
      //     case 101:
      //     case 113:
      //       input[i] = 'F '
      //       break;
      //     //Gb
      //     case 6:
      //     case 18:
      //     case 30:
      //     case 42:
      //     case 54:
      //     case 66:
      //     case 78:
      //     case 90:
      //     case 102:
      //     case 114:
      //       input[i] = 'Gb '
      //       break;
      //     //G
      //     case 7:
      //     case 19:
      //     case 31:
      //     case 43:
      //     case 55:
      //     case 67:
      //     case 79:
      //     case 91:
      //     case 103:
      //     case 115:
      //       input[i] = 'G '
      //       break;
      //     //Ab
      //     case 8:
      //     case 20:
      //     case 32:
      //     case 44:
      //     case 56:
      //     case 68:
      //     case 80:
      //     case 92:
      //     case 104:
      //     case 116:
      //       input[i] = 'Ab '
      //       break;
      //     //A
      //     case 9:
      //     case 21:
      //     case 33:
      //     case 45:
      //     case 57:
      //     case 69:
      //     case 81:
      //     case 93:
      //     case 105:
      //     case 117:
      //       input[i] = 'A '
      //       break;
      //     //Bb
      //     case 10:
      //     case 22:
      //     case 34:
      //     case 46:
      //     case 58:
      //     case 70:
      //     case 82:
      //     case 94:
      //     case 106:
      //     case 118:
      //       input[i] = 'Bb '
      //       break;
      //     //B
      //     case 11:
      //     case 23:
      //     case 35:
      //     case 47:
      //     case 59:
      //     case 71:
      //     case 83:
      //     case 95:
      //     case 107:
      //     case 119:
      //       input[i] = 'B '
      //       break;
      //     default:
      //       break;
      //   }
      // }
    // } else
    // {
      switch (input)
      {
        //C
        case 0:
        case 12:
        case 24:
        case 36:
        case 48:
        case 60:
        case 72:
        case 84:
        case 96:
        case 108:
        case 120:
          input = 'C '
          break;
        //Db
        case 1:
        case 13:
        case 25:
        case 37:
        case 49:
        case 61:
        case 73:
        case 85:
        case 97:
        case 109:
          input = 'Db '
          break;
        //D
        case 2:
        case 14:
        case 26:
        case 38:
        case 50:
        case 62:
        case 74:
        case 86:
        case 98:
        case 110:
          input = 'D '
          break;
        //Eb
        case 3:
        case 15:
        case 27:
        case 39:
        case 51:
        case 63:
        case 75:
        case 87:
        case 99:
        case 111:
          input = 'Eb '
          break;
        //E
        case 4:
        case 16:
        case 28:
        case 40:
        case 52:
        case 64:
        case 76:
        case 88:
        case 100:
        case 112:
          input = 'E '
          break;
        //F
        case 5:
        case 17:
        case 29:
        case 41:
        case 53:
        case 65:
        case 77:
        case 89:
        case 101:
        case 113:
          input = 'F '
          break;
        //Gb
        case 6:
        case 18:
        case 30:
        case 42:
        case 54:
        case 66:
        case 78:
        case 90:
        case 102:
        case 114:
          input = 'Gb '
          break;
        //G
        case 7:
        case 19:
        case 31:
        case 43:
        case 55:
        case 67:
        case 79:
        case 91:
        case 103:
        case 115:
          input = 'G '
          break;
        //Ab
        case 8:
        case 20:
        case 32:
        case 44:
        case 56:
        case 68:
        case 80:
        case 92:
        case 104:
        case 116:
          input = 'Ab '
          break;
        //A
        case 9:
        case 21:
        case 33:
        case 45:
        case 57:
        case 69:
        case 81:
        case 93:
        case 105:
        case 117:
          input = 'A '
          break;
        //Bb
        case 10:
        case 22:
        case 34:
        case 46:
        case 58:
        case 70:
        case 82:
        case 94:
        case 106:
        case 118:
          input = 'Bb '
          break;
        //B
        case 11:
        case 23:
        case 35:
        case 47:
        case 59:
        case 71:
        case 83:
        case 95:
        case 107:
        case 119:
          input = 'B '
          break;
        default:
          break;
      }
    // }
    return input;
  }
}
