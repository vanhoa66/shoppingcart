const showMoney = (money, unit, type) => {
    if (type === "right")
        return money + ' ' + unit;
    return unit + ' ' + money
}

export default showMoney;