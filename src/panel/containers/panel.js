import React from 'react'
import PanelLayout from '../components/panel-layout'
import Categories from '../components/categories'
import Category from '../components/category'

class Panel extends React.Component {
	render() {
		return(
			<PanelLayout>
					{
						this.props.data.categories.map((item) => {
							return (
								<Categories title={item.title} info={item.info} key={item.id}>
									{
										item.elements.map((item) => <Category informacion={item.info} titulo={item.titulo} src={item.src} key={item.id}/>)
									}
								</Categories>
							)
						})
					}
			</PanelLayout>
		)
	}
}

export default Panel

