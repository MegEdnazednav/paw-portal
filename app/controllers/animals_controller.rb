class AnimalsController < ApplicationController
  def new
    @animal = Animal.new
  end

  def show
    @animal = Animal.find(params[:id])
  end

  def create
    @animal = Animal.create!(animal_params)
    @animal.primary_image.attach(params[:animal][:primary_image])
    p @animal.primary_image.attached?
    redirect_to animal_path(@animal)
  end

  private

  def animal_params
    params.require(:animal).permit(:id, :name, :age, :kind, :description, :primary_image)
  end
end
