class ChartBuilder {
    constructor() {
        this.title = "",
        this.showTitle = false;
        this.data = {};
        this.showLegend = false;
    }

    setTitle(title) {
        this.title = title;
        return this;
    }

    setShowTitle() {
        this.showTitle = true;
        return this;
    }

    setData(data) {
        this.data = data;
        return this;
    }

    setShowLegend() {
        this.showLegend = true;
        return this;
    }

    build() {
        return {
            title: this.title,
            showTitle: this.showTitle,
            data: this.data,
            showLegend: this.showLegend
        }
    }
}