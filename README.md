# Trash Crisis In California

## Link to the Page
[Final Story](https://yiren54610.github.io/trash_story/)
[Landfill Methane Outreach Program (LMOP)](https://www.epa.gov/lmop/project-and-landfill-data-state)

## Update
An analytical report on the Bigfoot sighting incidents documented by the BFRO (Bigfoot Field Researchers Organization) has been developed. The following datasets are included:

- **Landfillmopdata.csv**: Contains the data of landfill sites including geo-coords, waste in place (tons), and estimated methane emissions per site per dat (tons CO2e per year).
- **CA_census_data.csv**: Includes geospatial data related to sighting classifications.

## Goal
- **Mapping**: Visualize the distribution of landfill sites across California.
- **Analysis**: Examine patterns in the distribution and in relation to the ethnicity.
- **Evaluation**: Identify biggest problems with the landfill sites, especially with landfill gases production.

## Programming Languages and Tools
- **Python**: For data cleaning and exploratory data analysis, filtering data to state level, and caculate total methane emissions.
- **RStudio**: For census data collection
- **HTML**: For parsing and extracting data from web pages.
- **QGIS**: 
  - To draw the map of California.
- **Illustrator**
- **ai2html**
- **GeoJson**: For handling geospatial data.
- **Datawrapper**: For creating visualizations like choropleth maps and charts.

## Process Summary

### Data Processing
0. **Story-Inspiration**:
    - I was inspired by reports on testile waste landfill report, mentioning that landills are three times more likely to appear near a BICOP community, so I decided to investigate the story of trash.

1. **Data Collection**:
   - Get data from EPA LMOP website ([Link](https://www.epa.gov/lmop/project-and-landfill-data-state))
   - Use Python to download and parse the data from the website.
   - Extract relevant information such as landfill name, location, waste in place, and estimated methane emissions.

2. **Data Cleaning - identify the focus**:
   - Conduct an exploratory data analysis to identify the state with the highest number of landfill sites and greatest problems with methane emissions.
      - Calculate the total methane emissions for each state using the waste in place and estimated methane emissions per ton of waste.
   - Identified California as the state with the most landfill sites and the highest methane emissions.

3. **Map the Distribution**:
   - Use Census RStutio to get census data of California.
   - save the CA data to a geojson file.

### Mapping
1. **QGIS**:
   - Use QGIS to create a symbol map - landfill sites in California
   - Use illustrator to convert red dots to the symbol of trash cans. 
   - Use illustrator to create a responsive graph with ai2html

### Charts
- Use Datawrapper to create:
  - A pie chart showing the methane sources in CA
  - A range plot showing the time span of the landfill sites operation.


## Discussion
- The analysis reveals the urgency of California's trash crisis.
- Next report will be risk analysis and regression to test the relationship between ethnicities the landfill sites.
