//html code 

{{book.rating|home: book.rating}}

// ts code

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'home'
})
export class RatingPipe implements PipeTransform {

    transform(value: any, rating: string): any {
        if (rating == '10') {
            return "Excellent. Must Read ";
        }
        else if (rating == "9") {
            return "Wonderful Book. Should Read "
        }
        else if (rating =="8") {
            return "It’s a Very Good book to read "
        }
        else if (rating == "7") {
            return "Good book. You won't be dispapointed "
        }
        else if (rating == "6") {
            return "Good. Read it if you have time  "
        }
        else if (rating == "5") {
            return "Average. You may like it "
        }
        else if (rating == "4") {
            return "Average. Read if you must!  "
        }
        else if (rating == "3") {
            return "Skip it, Go find some better read "
        }
        else if (rating == "2") {
            return "Expensive at cost 0 "
        }
        else if (rating == "1") {
            return "Don’t read if you are paid to"
        }

    }

}

