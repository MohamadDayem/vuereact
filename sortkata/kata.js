sort(callback) {
    for (let n = 0; n < this.tab.length; n++)
    {
        for (let i = 0; i < this.tab.length; i++) {
            if ( i + 1 < this.tab.length)
            {
                const result = callback(this.tab[i], this.tab[i+1])
                if (result > 0) {
                    // B soit avant A
                    const swap = this.tab[i + 1]
                    this.tab[i + 1] = this.tab[i]
                    this.tab[i] = swap
                }
            }
            /*
                        if (i + 1 < this.tab.length && this.tab[i] > this.tab[i + 1]) {
                            const swap = this.tab[i + 1]
                            this.tab[i + 1] = this.tab[i]
                            this.tab[i] = swap
                        } */
        }
    }
    return this.tab
}

