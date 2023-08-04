export default class ChartBuilder {

    constructor() {
        this.title = "",
        this.showTitle = false;
        this.data = {};
        this.chartType = "";
        this.showLegend = false;
    }

    setTitle(title) {
        this.title = title;
        return this;
    }

    getTitle() {
        return this.title;
    }

    setShowTitle() {
        this.showTitle = true;
        return this;
    }

    getShowTitle() {
        return this.showTitle;
    }

    setData(data) {
        this.data = data;
        return this;
    }

    getData() {
        return this.data;
    }

    setShowLegend() {
        this.showLegend = true;
        return this;
    }

    getShowLegend() {
        return this.showLegend;
    }

    setChartType(chartType) {
        this.chartType = chartType;
        return this;
    }

    build() {
        return {
            title: this.title,
            showTitle: this.showTitle,
            data: this.data,
            showLegend: this.showLegend,
            chartType: this.chartType
        }
    }
}