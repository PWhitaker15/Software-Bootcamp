const defaultValues = {
        amount: +1000,
        years: +5,
        rate: +5,
};

it("should calculate the monthly rate correctly", function () {
        // ...
        expect(calculateMonthlyPayment(defaultValues)).toEqual("416.67");
});

it("should return a result with 2 decimal places", function () {
        // ..
        monthlyPayment = calculateMonthlyPayment(defaultValues);
        afterDecimal = monthlyPayment.split(".")[1];
        expect(afterDecimal.length).toEqual(2);
});

it("should return return a rate of 0.00 if all values are 0", function () {
        // ...
        const zeroValues = {
                amount: +0,
                years: +0,
                rate: +0,
        };
        expect(calculateMonthlyPayment(zeroValues)).toEqual("0.00");
});

it("should return return a rate of 0.00 if years is 0", function () {
        // ...
        const zeroYears = {
                amount: +1000,
                years: +0,
                rate: +5,
        };
        expect(calculateMonthlyPayment(zeroYears)).toEqual("0.00");
});

/// etc
