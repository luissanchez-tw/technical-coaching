class Range{
    constructor(startDate, endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
    isOverlapped(range){
        return (range.startDate >= this.startDate && range.startDate < this.endDate) ||
            (range.endDate > this.startDate && range.endDate < this.endDate) ||
            range.startDate < this.startDate && range.endDate >= this.endDate;
    }
}


module.exports = Range;