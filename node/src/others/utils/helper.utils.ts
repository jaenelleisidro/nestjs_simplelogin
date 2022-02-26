export default class HelperUtils{
    /**
     * 
     * checks if username is valid
     * ^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$
     *  └─────┬────┘└───┬──┘└─────┬─────┘└─────┬─────┘ └───┬───┘
     *        │         │         │            │           no _ or . at the end
     *        │         │         │            │
     *        │         │         │            allowed characters
     *        │         │         │
     *        │         │         no __ or _. or ._ or .. inside
     *        │         │
     *        │         no _ or . at the beginning
     *        │
     *        username is 8-20 characters long
     * @param username username that needs to be checked
     * @returns true if valid, false if not
     */
    public static isUserNameValid(username:string){
        return /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(username)
    }

    /**
     * this will require the password to be
     * At least one upper case English letter, (?=.*?[A-Z])
     * At least one lower case English letter, (?=.*?[a-z])
     * At least one digit, (?=.*?[0-9])
     * At least one special character, (?=.*?[#?!@$%^&*-])
     * Minimum eight in length Maximum 15 .{8,15} (with the anchors)
     * @param {string} password the password that needs to be validated
     * @returns {boolean} determines wether password is valid or not
     */
    public static isPasswordValid(password:string) {
        return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/.test(password);
    }    

    randomInt(min:number, max:number) {
		return min + Math.floor((max - min) * Math.random());
	}

}