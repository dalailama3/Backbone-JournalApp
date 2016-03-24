class Api::PostsController < ApplicationController
  def create

    @post = Post.new(self.post_params)
    if @post.save
      render :json => @post
    else
      render :json => @post.errors, :status => :unprocessable_entity
    end

  end

  def show
    @post = Post.find(params[:id])
    render :json => @post
  end

  def index
    @posts = Post.all
    render :json => @posts
  end

  def update
    @post = Post.find(params[:id])
    if @post.update_attributes(self.post_params)
      render :json => @post
    else
      render :json => @post.errors, :status => :unprocessable_entity
    end

  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy!
    render :json => @post
  end

  protected

  def post_params
    self.params[:post].permit(:title, :body)
  end
end
