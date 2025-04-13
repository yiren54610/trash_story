# Trash Crisis In California

## Link to the Page
[Final Report](https://yiren54610.github.io/Bigfoot/)
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
- **Regex**: For text processing and pattern matching.
- **HTML**: For parsing and extracting data from web pages.
- **QGIS**: 
  - To draw the map of California.
- **Illustrator**
- **ai2html**
- **GeoJson**: For handling geospatial data.
- **Datawrapper**: For creating visualizations like choropleth maps and charts.

## Process Summary

### Data Processing
1. **Data Collection**:
   - Scrape data from the BFRO website ([link](https://www.bfro.net/gdb/)) using BeautifulSoup.
   - Extract the following details for each county:
     - County name
     - Number of listings
     - Most recent report date
     - Last posted date
     - Link to detailed reports

2. **Detailed Data Extraction**:
   - Loop through each county link to access detailed sighting pages.
   - Scrape additional information such as:
     - Sighting class (Class A/B)
     - Date of sighting
     - Exact location details

3. **Geocoding**:
   - Use Google GeoAPI to obtain latitude and longitude coordinates for each sighting location.
   - Use the FCC Area API to retrieve FIPS codes for each county.

### Mapping
1. **Choropleth Map**:
   - Use Datawrapper to create a choropleth map showing the distribution of sightings across the US.
   - Apply a color gradient to represent the number of sightings per region.

2. **Washington State Locator Map**:
   - Focus on Washington State, which has the highest number of reported sightings.
   - Download forest coverage data from the US Forest Service ([link](https://data-usfs.hub.arcgis.com/datasets/usfs::forest-administrative-boundaries-feature-layer/explore)).
   - Narrow down the GeoJSON file to include only forests in Washington State.
   - Simplify the GeoJSON file using Mapshaper to reduce its size to under 2MB.
   - Add forest coverage data to the locator map.
   - Filter sightings in Washington State using Python and add markers to areas with lower forest coverage.

### Charts
- Use Datawrapper to create:
  - A bar chart showing the number of sightings by state.
  - A line area chart illustrating chronological changes in sighting reports over time.

### Reporting
- Conducted an interview with Matt Moneymaker, the president and founder of the BFRO, to gain insights into the data collection process and the organization's methodology.

## Discussion
- The analysis reveals interesting patterns in Bigfoot sightings, particularly in regions with varying forest coverage.
- Future research could focus on specific case studies, such as sightings in Central America, where forest coverage is lower, to explore potential correlations between habitat and sighting frequency.
- Limitations in the data, such as reporting biases or incomplete evidence, should be addressed in further studies.