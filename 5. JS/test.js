var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    lastName: function () {
        console.log(this.name.split(" ")[1]);
    }
}