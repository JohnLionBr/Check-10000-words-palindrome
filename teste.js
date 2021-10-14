const main = (params) => {

    var array = createArray()
    let palindromes = 0
    array.forEach((word) => {
        if ( isPalindrome(word) ) {
            palindromes++
        }
    })
    console.log(palindromes)
    return palindromes
}

/* Create a random with 10000 random strings between 3 and 5 characters
 * 
 * @return array
 */
const createArray = () => {
    let array = []
    for ( let i = 0; i < 10000 ; i++ ) {
        array[i] = generateString(Math.floor(Math.random() * (5 - 3 + 1)) + 3)
    }
    return array
}

/* Generate a random string with param length
 * @param length length of random string generated
 * 
 * @return string
 */
const generateString = (length) => {
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    let string = ''
    for ( var i = 0; i < length; i++ ) {
        string += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return string
}

/* Check if the string palindrome
 * @param word string to be checked
 * 
 * @return Boolean true if is palindrome
 */
const isPalindrome = (word) => {
    let isPalindrome = true
    word.split('').forEach((char, index) => {
        if ( char !== word[word.length - 1 - index ]) {
            isPalindrome = false
        }
    })

    return isPalindrome
}

main()