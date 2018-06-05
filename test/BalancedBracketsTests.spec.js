describe("BalancedBrackets", function () {
    describe("Given an empty string", function () {
        it("should return OK", function () {

            //Arrange
            let balancedBrackets = new BalancedBrackets;
            let input = "";
            //Act
            let actual = balancedBrackets.BalanceBrackets(input);
            //Assert
            let expected = "OK";
            expect(actual).toBe(expected);
        });

    });

    describe("Given balanced set of brackets", function () {
        ["[]", "[][]", "[[]]", "[[[][]]]"]
            .forEach(function (element) {
                it("should return OK", function () {

                    //Arrange
                    let balancedBrackets = new BalancedBrackets;
                    let input = element;
                    //Act
                    let actual = balancedBrackets.BalanceBrackets(input);
                    //Assert
                    let expected = "OK";
                    expect(actual).toBe(expected);
                })


            })

    })

    describe("Given unbalanced set of brackets", function () {
        ["][", "][][", "[][]]["]
            .forEach(function (element) {
                it("should return FAIL", function () {

                    //Arrange
                    let balancedBrackets = new BalancedBrackets;
                    let input = element;
                    //Act
                    let actual = balancedBrackets.BalanceBrackets(input);
                    //Assert
                    let expected = "FAIL";
                    expect(actual).toBe(expected);
                })


            })

    })
})